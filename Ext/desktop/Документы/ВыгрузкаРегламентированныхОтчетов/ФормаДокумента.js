Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 720,
	iconCls: 'bogus',
	title: '',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:93px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:93px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:424px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:398px;width:622px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:93px;top:81px;width:60px;height:20px;',
		},
	]
});