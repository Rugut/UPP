Ext.define('Документы.ВводСведенийОПлановыхНачисленияхРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 576,width: 600,
	iconCls: 'bogus',
	title: 'Ввод сведений о плановых начислениях сотрудников организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:373px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:524px;width:497px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:373px;top:56px;width:220px;height:19px;',
		},
	]
});