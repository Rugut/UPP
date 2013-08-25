Ext.require(['Данные.Документы.УстановкаСоответствияСчетовБУиМСФО'], function () 
{
	Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаИмпорт',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:81px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Импорт правил соответствия счетов БУ и МСФО',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Имя файла:',
			style: 'position:absolute;left:8px;top:29px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайла',
			width: 341,
			height: 19,
			style: 'position:absolute;left:72px;top:29px;width:341px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Соответствие Счетов БУ и МСФО',
			style: 'position:absolute;left:8px;top:5px;width:197px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключение Проводок',
			style: 'position:absolute;left:205px;top:5px;width:138px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:56px;width:421px;height:25px;',
			width: 421,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Действие1',
				},
				'-',
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