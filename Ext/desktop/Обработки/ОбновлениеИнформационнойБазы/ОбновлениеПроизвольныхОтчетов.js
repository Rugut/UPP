Ext.define('Обработки.ОбновлениеИнформационнойБазы.ОбновлениеПроизвольныхОтчетов',
	{
	extend: 'Ext.window.Window',
	height: 166,width: 591,
	iconCls: 'bogus',
	title: 'Подготовка произвольных отчетов для использования в управляемом приложении',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:591px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:141px;width:591px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});