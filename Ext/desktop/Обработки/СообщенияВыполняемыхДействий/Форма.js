Ext.require(['Данные.Обработки.СообщенияВыполняемыхДействий'], function () 
{
	Ext.define('Обработки.СообщенияВыполняемыхДействий.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Внимание!',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:279px;width:483px;height:24px;',
			width: 483,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
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