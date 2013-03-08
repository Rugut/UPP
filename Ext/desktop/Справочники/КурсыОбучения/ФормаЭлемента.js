Ext.define('Справочники.КурсыОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 477,width: 414,
	iconCls: 'bogus',
	title: 'Курс обучения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:312px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеКурса',
			style: 'position:absolute;left:8px;top:110px;width:398px;height:60px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьКурса',
			style: 'position:absolute;left:188px;top:175px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗатратыНаОдногоОбучающегося',
			style: 'position:absolute;left:188px;top:200px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокументаОбОбразовании',
			style: 'position:absolute;left:8px;top:243px;width:398px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:312px;top:200px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:56px;width:312px;height:19px;',
		},
	]
});