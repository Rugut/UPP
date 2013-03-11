Ext.define('Обработки.ОбновлениеИнформационнойБазы.ЗагрузкаНастроекТиповыхОтчетов',
	{
	extend: 'Ext.window.Window',
	height: 90,width: 419,
	iconCls: 'bogus',
	title: 'Загрузка настроек типовых отчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:419px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:65px;width:419px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});