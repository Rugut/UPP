Ext.define('Справочники.ТиповыеАнкеты.ФормаОбязательногоВопроса',
	{
	extend: 'Ext.window.Window',
	height: 303,width: 294,
	iconCls: 'bogus',
	title: 'Настройка обязательности ответа на вопрос',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВопросУсловия',
			style: 'position:absolute;left:25px;top:140px;width:261px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответ',
			style: 'position:absolute;left:160px;top:183px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловиеОтвета',
			style: 'position:absolute;left:25px;top:183px;width:129px;height:19px;',
		},
	]
});