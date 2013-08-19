Ext.require(['Данные.Отчеты.РегламентированныйОтчетБухОтчетность'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.КонтрольныеСоотношения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:580px;height:451px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Результаты проверки соотношений показателей регламентированных отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:426px;width:580px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отобразить только ошибочные соотношения.',
			style: 'position:absolute;left:8px;top:33px;width:257px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});