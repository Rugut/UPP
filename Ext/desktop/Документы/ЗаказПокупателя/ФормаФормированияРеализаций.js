Ext.define('Документы.ЗаказПокупателя.ФормаФормированияРеализаций',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 744,
	iconCls: 'bogus',
	title: 'Оформление документов ""Реализация товаров и услуг""',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровРеализации',
			style: 'position:absolute;left:251px;top:149px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровДокументаОрдер',
			style: 'position:absolute;left:626px;top:149px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровСФ',
			style: 'position:absolute;left:251px;top:319px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровПКО',
			style: 'position:absolute;left:626px;top:319px;width:100px;height:19px;',
		},
	]
});