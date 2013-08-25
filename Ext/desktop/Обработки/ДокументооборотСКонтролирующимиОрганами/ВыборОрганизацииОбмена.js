Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборОрганизацииОбмена',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:491px;height:343px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выберите организации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:37px;width:475px;height:24px;',
			width: 475,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:61px;width:475px;height:271px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:491px;height:25px;',
			width: 491,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:35px;width:475px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
	]
	});
});