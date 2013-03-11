Ext.define('Справочники.Номенклатура.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 698,
	iconCls: 'bogus',
	title: 'Настройка формы элемента Номенклатура',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:698px;height:25px;',
			items:
			[
				{
					text:'ВосстановитьНастройки',
				},
				{
					text:'СохранитьНастройки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:698px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыНастройкиПоУмолчанию',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:682px;height:226px;',
			height: 226,width: 682,
			items:
			[
				{
					title:'НастройкаСтраниц',
				},
				{
					title:'НастройкаОбязательныхРеквизитов',
				},
				{
					title:'НастройкаОбязательнойНоменклатуры',
				},
			]
		},
	]
});