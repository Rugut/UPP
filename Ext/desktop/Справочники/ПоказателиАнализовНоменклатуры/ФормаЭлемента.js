Ext.define('Справочники.ПоказателиАнализовНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 531,
	iconCls: 'bogus',
	title: 'Показатели анализов номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:468px;top:57px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:139px;top:57px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:139px;top:33px;width:384px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРезультатаАнализа',
			style: 'position:absolute;left:139px;top:81px;width:384px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:531px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:531px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:515px;height:152px;',
			height: 152,width: 515,
			items:
			[
				{
					title:'ЧисловойДиапазон',
				},
				{
					title:'ВхождениеВСписок',
				},
			]
		},
	]
});