Ext.define('Документы.ПеремещениеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 652,
	iconCls: 'bogus',
	title: 'Перемещение товаров',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:365px;width:557px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОтправитель',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладПолучатель',
			style: 'position:absolute;left:406px;top:81px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутреннийЗаказ',
			style: 'position:absolute;left:406px;top:57px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:342px;width:80px;height:17px;',
		},
	]
});