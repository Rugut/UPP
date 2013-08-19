Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РезультатОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:863px;height:656px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Результат проверки отчета ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'fieldset',
			title: 'Электронное представление отчета',
			style: 'position:absolute;left:8px;top:8px;width:847px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:847px;height:200px;',
			height: 200,width: 847,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеТекст',
			style: 'position:absolute;left:0px;top:0px;width:847px;height:200px;',
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:234px;width:847px;height:389px;',
			height: 389,width: 847,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница TXT',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Протокол проверки',
			style: 'position:absolute;left:0px;top:0px;width:847px;height:16px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Протокол',
			style: 'position:absolute;left:0px;top:20px;width:847px;height:369px;',
		},
					]
				},
				{
					title:'Страница HTML',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Протокол проверки',
			style: 'position:absolute;left:0px;top:0px;width:847px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСохранить1',
			text: 'Выгрузить',
			style: 'position:absolute;left:791px;top:1px;width:56px;height:15px;text-align:right;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:631px;width:863px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});