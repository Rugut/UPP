Ext.define('Отчеты.АнализЗаказа.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:415px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ заказа покупателя',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗаказПокупателя',
			width: 320,
			height: 19,
			style: 'position:absolute;left:50px;top:33px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ДатаАнализа',
			text: 'Дата и время анализа:',
			style: 'position:absolute;left:390px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВремяАнализа',
			width: 120,
			height: 19,
			style: 'position:absolute;left:512px;top:33px;width:120px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Новое окно',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});