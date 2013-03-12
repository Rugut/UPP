Ext.define('Отчеты.АнализЗаказа.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:415px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ заказа покупателя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
				{
					text:'Новое окно',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Новое окно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказПокупателя',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяАнализа',
			style: 'position:absolute;left:512px;top:33px;width:120px;height:19px;',
		},
	]
});