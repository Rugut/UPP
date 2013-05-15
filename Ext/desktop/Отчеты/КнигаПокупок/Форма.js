Ext.define('Отчеты.КнигаПокупок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:468px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Книга покупок',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'НачалоПериода',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'КонецПериода',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:364px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать дополнительные листы',
			style: 'position:absolute;left:8px;top:57px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныеЛистыЗаТекущийПериод',
			style: 'position:absolute;left:230px;top:57px;width:183px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:588px;height:379px;',
			height: 379,width: 588,
			items:
			[
				{
					title:'Основной раздел',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить только доп. листы',
			style: 'position:absolute;left:418px;top:57px;width:178px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Закрыть',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});