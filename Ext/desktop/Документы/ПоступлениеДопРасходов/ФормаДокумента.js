Ext.define('Документы.ПоступлениеДопРасходов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 676,
	iconCls: 'bogus',
	title: 'Документ Поступление доп. расходов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:100px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:199px;top:32px;width:121px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:429px;width:561px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:424px;top:81px;width:243px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:100px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:100px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:652px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:565px;top:405px;width:103px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:100px;top:160px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Содержание',
			style: 'position:absolute;left:100px;top:130px;width:567px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределения',
			style: 'position:absolute;left:423px;top:56px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:278px;top:160px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:457px;top:160px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:565px;top:381px;width:103px;height:17px;',
		},
	]
});