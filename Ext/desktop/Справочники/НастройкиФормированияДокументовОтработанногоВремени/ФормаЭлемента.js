Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 335,width: 416,
	iconCls: 'bogus',
	title: 'Настройки формирования документов отработанного времени',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:101px;top:58px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:101px;top:33px;width:307px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:416px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:203px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:400px;height:172px;',
			height: 172,width: 400,
			items:
			[
				{
					title:'ПараметрыФормируемыхДокументов',
				},
				{
					title:'АвтоматическоеФормированиеДокументов',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода6',
			style: 'position:absolute;left:101px;top:283px;width:307px;height:19px;',
		},
	]
});