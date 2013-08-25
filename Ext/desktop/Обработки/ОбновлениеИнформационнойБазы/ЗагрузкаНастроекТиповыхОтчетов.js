Ext.require(['Данные.Обработки.ОбновлениеИнформационнойБазы'], function () 
{
	Ext.define('Обработки.ОбновлениеИнформационнойБазы.ЗагрузкаНастроекТиповыхОтчетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:419px;height:90px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Загрузка настроек типовых отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:419px;height:25px;',
			width: 419,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Обработка выполняет загрузку предопределенных настроек типовых отчетов',
			style: 'position:absolute;left:8px;top:33px;width:403px;height:23px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:65px;width:419px;height:25px;',
			width: 419,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});