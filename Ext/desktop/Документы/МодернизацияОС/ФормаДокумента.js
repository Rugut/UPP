Ext.define('Документы.МодернизацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 500,width: 655,
	iconCls: 'bogus',
	title: 'Модернизация ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:427px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:421px;top:57px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперацийСОсновнымиСредствами',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:421px;top:81px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВключатьАПВСоставРасходовПриОтраженииМодернизации',
			style: 'position:absolute;left:334px;top:125px;width:313px;height:19px;',
		},
	]
});