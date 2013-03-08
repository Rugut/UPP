Ext.define('Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 395,width: 671,
	iconCls: 'bogus',
	title: 'Изменение параметров начисления амортизации ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:343px;width:570px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:92px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:92px;top:108px;width:220px;height:19px;',
		},
	]
});