Ext.require(['Данные.Обработки.РедактированиеКонтактнойИнформации'], function () 
{
	Ext.define('Обработки.РедактированиеКонтактнойИнформации.ФормаЗаписиВебСтраницы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:334px;height:189px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Веб-страница',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Веб-страница:',
			style: 'position:absolute;left:14px;top:109px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Представление',
			width: 220,
			height: 19,
			style: 'position:absolute;left:106px;top:109px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:137px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 220,
			height: 19,
			style: 'position:absolute;left:106px;top:137px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:334px;height:25px;',
			width: 334,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Веб-страница',
			style: 'position:absolute;left:8px;top:89px;width:318px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:33px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Объект',
			width: 220,
			height: 19,
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Вид веб-страницы:',
			style: 'position:absolute;left:8px;top:61px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Вид',
			width: 220,
			height: 19,
			style: 'position:absolute;left:106px;top:61px;width:220px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:164px;width:334px;height:25px;',
			width: 334,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'',
				},
				'-',
				{
					text:'Записать',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});