Ext.define('Документы.ОтчетКомитентуОПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 664,
	iconCls: 'bogus',
	title: 'Отчет комитенту',
	
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
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:428px;width:562px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:420px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
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
			name: 'Сделка',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:57px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДСВознаграждения',
			style: 'position:absolute;left:234px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			style: 'position:absolute;left:420px;top:105px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:576px;top:384px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:94px;top:129px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВознаграждения',
			style: 'position:absolute;left:576px;top:406px;width:80px;height:17px;',
		},
	]
});