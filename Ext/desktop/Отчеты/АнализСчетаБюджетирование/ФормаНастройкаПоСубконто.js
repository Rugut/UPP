Ext.require(['Данные.Отчеты.АнализСчетаБюджетирование'], function () 
{
	Ext.define('Отчеты.АнализСчетаБюджетирование.ФормаНастройкаПоСубконто',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Субконто',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'УстановитьВсе',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'СнятьВсе',
			text: '',
			style: 'position:absolute;left:38px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВверх',
			text: '',
			style: 'position:absolute;left:68px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВниз',
			text: '',
			style: 'position:absolute;left:98px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:37px;width:220px;height:220px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:236px;height:25px;',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
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