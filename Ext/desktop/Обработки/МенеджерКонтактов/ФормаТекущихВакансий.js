Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаТекущихВакансий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Текущие вакансии',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтчета',
			width: 80,
			height: 19,
			style: 'position:absolute;left:106px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вакансии на дату:',
			style: 'position:absolute;left:8px;top:33px;width:96px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сформировать',
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