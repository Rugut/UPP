Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаИзменениеИнтервалаДопроведения',
	{
	extend: 'Ext.window.Window',
	height: 140,width: 513,
	iconCls: 'bogus',
	title: 'Настройка периода допроведения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:115px;width:513px;height:25px;',
			items:
			[
				{
					text:'ИзменитьИнтервал',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеСправка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодичностьОтставанияКонецИнтервала',
			style: 'position:absolute;left:325px;top:77px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовОтставанияКонецИнтервала',
			style: 'position:absolute;left:290px;top:77px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДопроведения',
			style: 'position:absolute;left:34px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовОтставанияНачалоИнтервала',
			style: 'position:absolute;left:34px;top:77px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодичностьОтставанияНачалоИнтервала',
			style: 'position:absolute;left:73px;top:77px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаДопроведения',
			style: 'position:absolute;left:290px;top:53px;width:80px;height:19px;',
		},
	]
});