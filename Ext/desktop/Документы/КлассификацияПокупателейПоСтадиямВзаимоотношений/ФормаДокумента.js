Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 660,
	iconCls: 'bogus',
	title: 'Классификация покупателей по стадиям взаимоотношений',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:162px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:378px;width:556px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:354px;width:556px;height:19px;',
		},
	]
});