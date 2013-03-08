Ext.define('Документы.АвансовыйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 692,
	iconCls: 'bogus',
	title: 'Авансовый отчет',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:110px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:110px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:443px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:110px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:588px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоПоОтчету',
			style: 'position:absolute;left:575px;top:359px;width:103px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоАвансов',
			style: 'position:absolute;left:575px;top:339px;width:104px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:354px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеАванса',
			style: 'position:absolute;left:443px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДокументов',
			style: 'position:absolute;left:96px;top:339px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЛистов',
			style: 'position:absolute;left:231px;top:339px;width:40px;height:19px;',
		},
	]
});