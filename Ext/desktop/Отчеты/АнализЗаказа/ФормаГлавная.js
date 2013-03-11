Ext.define('Отчеты.АнализЗаказа.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	height: 415,width: 640,
	iconCls: 'bogus',
	title: 'Анализ заказа покупателя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действия',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'НовоеОкно',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Сформировать',
				},
				{
					text:'НовоеОкно',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяАнализа',
			style: 'position:absolute;left:512px;top:33px;width:120px;height:19px;',
		},
	]
});