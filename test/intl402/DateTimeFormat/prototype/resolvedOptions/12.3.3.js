// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 12.3.3
description: >
    Tests that the object returned by
    Intl.DateTimeFormat.prototype.resolvedOptions  has the right
    properties.
author: Norbert Lindenberg
includes: [testIntl.js, propertyHelper.js]
---*/

var actual = new Intl.DateTimeFormat().resolvedOptions();

var actual2 = new Intl.DateTimeFormat().resolvedOptions();
assert.notSameValue(actual2, actual, "resolvedOptions returned the same object twice.");

// source: CLDR file common/bcp47/calendar.xml; version CLDR 21.
var calendars = [
    "buddhist",
    "chinese",
    "coptic",
    "ethioaa",
    "ethiopic",
    "gregory",
    "hebrew",
    "indian",
    "islamic",
    "islamicc",
    "iso8601",
    "japanese",
    "persian",
    "roc"
];

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "calendar", calendars);
mustHaveProperty(actual, "numberingSystem", isValidNumberingSystem);
mustHaveProperty(actual, "timeZone", isCanonicalizedStructurallyValidTimeZoneName);
verifyProperty(actual, "weekday", undefined);
verifyProperty(actual, "era", undefined);
mustHaveProperty(actual, "year", ["2-digit", "numeric"]);
mustHaveProperty(actual, "month", ["2-digit", "numeric", "narrow", "short", "long"]);
mustHaveProperty(actual, "day", ["2-digit", "numeric"]);
verifyProperty(actual, "hour", undefined);
verifyProperty(actual, "minute", undefined);
verifyProperty(actual, "second", undefined);
verifyProperty(actual, "timeZoneName", undefined);
verifyProperty(actual, "hour12", undefined);
