Ext.define('Обработки.РегламентированнаяОтчетностьСоотношенияПоказателей.КонтрольныеСоотношения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:451px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Результаты проверки соотношений показателей регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:426px;width:580px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Активизировать родительский отчет',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отобразить формулы всех периодов.',
			style: 'position:absolute;left:273px;top:33px;width:212px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отобразить только ошибочные соотношения.',
			style: 'position:absolute;left:8px;top:33px;width:257px;height:15px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});