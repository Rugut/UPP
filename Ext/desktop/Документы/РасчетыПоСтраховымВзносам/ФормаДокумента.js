Ext.define('Документы.РасчетыПоСтраховымВзносам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 510,width: 670,
	iconCls: 'bogus',
	title: 'Расчеты с фондами по страховым взносам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:442px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:542px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:442px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:458px;width:566px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперации',
			style: 'position:absolute;left:115px;top:33px;width:220px;height:19px;',
		},
	]
});