Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.НастройкаРасшифровкиОтдельныхПоказателей',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 716,
	iconCls: 'bogus',
	title: 'Настройка расшифровки отдельных показателей бухгалтерской отчетности',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОтметкиСнять',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'ФлажкиУстановить',
				},
				{
					text:'Сбросить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:418px;',
			height: 418,width: 700,
			columns:
			[
			]
		},
	]
});