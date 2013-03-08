Ext.define('Документы.Встречи.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 675,
	iconCls: 'bogus',
	title: 'Встреча',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:300px;top:394px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:116px;top:394px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:495px;top:394px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:58px;top:63px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Продолжительность',
			style: 'position:absolute;left:331px;top:33px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРезервирования',
			style: 'position:absolute;left:58px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНачала',
			style: 'position:absolute;left:192px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаявкаКандидата',
			style: 'position:absolute;left:495px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодобратьСвободноеПомещение',
			text: 'Подобрать свободное помещение',
			style: 'position:absolute;left:257px;top:63px;width:123px;height:36px;',
		},
	]
});