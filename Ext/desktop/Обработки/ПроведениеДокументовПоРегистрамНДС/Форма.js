Ext.require(['Данные.Обработки.ПроведениеДокументовПоРегистрамНДС'], function () 
{
	Ext.define('Обработки.ПроведениеДокументовПоРегистрамНДС.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:338px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проведение документов по регистрам НДС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:53px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:70px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:152px;top:53px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:171px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:53px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы только выбранного периода',
			style: 'position:absolute;left:8px;top:33px;width:322px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:153px;width:322px;height:24px;',
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
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Организации',
			style: 'position:absolute;left:8px;top:137px;width:322px;height:16px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:178px;width:322px;height:187px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы по оперативным регистрам',
			style: 'position:absolute;left:8px;top:77px;width:322px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы по регистрам партий',
			style: 'position:absolute;left:8px;top:97px;width:322px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить суммовые и курсовые разницы в регистрах НДС',
			style: 'position:absolute;left:8px;top:117px;width:322px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:338px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:338px;height:25px;',
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
				},
			]
		},
	]
	});
});