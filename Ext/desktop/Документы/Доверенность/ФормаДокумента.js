Ext.define('Документы.Доверенность.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 385,width: 652,
	iconCls: 'bogus',
	title: 'Документ Доверенность',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:333px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:418px;top:105px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:90px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:627px;top:129px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетОрганизации',
			style: 'position:absolute;left:418px;top:57px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:558px;top:33px;width:84px;height:19px;',
		},
	]
});