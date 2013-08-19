Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодтверждениеДатыПолучения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:583px;height:111px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подтверждение даты получения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Подтвердившая организация:',
			style: 'position:absolute;left:8px;top:34px;width:162px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОрганизацияСтр',
			width: 402,
			height: 19,
			style: 'position:absolute;left:173px;top:34px;width:402px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Имя отправленного файла:',
			style: 'position:absolute;left:8px;top:59px;width:162px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПоступившегоФайла',
			width: 402,
			height: 19,
			style: 'position:absolute;left:173px;top:59px;width:402px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дата и время отправки:',
			style: 'position:absolute;left:8px;top:8px;width:162px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДатаОтправки',
			width: 402,
			height: 19,
			style: 'position:absolute;left:173px;top:8px;width:402px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:86px;width:583px;height:25px;',
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