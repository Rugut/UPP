Ext.define('Документы.ОтпускПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 784,
	iconCls: 'bogus',
	title: 'Отпуск по уходу за ребенком',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:531px;width:680px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:106px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:106px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:206px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:478px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:578px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:478px;top:57px;width:220px;height:19px;',
		},
	]
});