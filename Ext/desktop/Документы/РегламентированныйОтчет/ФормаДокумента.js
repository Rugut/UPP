Ext.require(['Данные.Документы.РегламентированныйОтчет'], function () 
{
	Ext.define('Документы.РегламентированныйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:89px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Документ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Эта форма вспомогательная, предназначена для открытия нужной формы отчета в виде внешней обработки. ВИЗУАЛЬНО НЕ ОТОБРАЖАЕТСЯ.',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:48px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:64px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});