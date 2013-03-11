Ext.define('Документы.ПереносЗадолженностиРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 389,width: 624,
	iconCls: 'bogus',
	title: 'Перенос задолженности из прошлых периодов в текущий',
	
	items:
	[
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
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:337px;width:520px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:58px;width:190px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ПоЗадолженности',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:624px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:426px;top:33px;width:190px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:608px;height:183px;',
			height: 183,width: 608,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Физлицо',
				},
				{
					text:'ПериодВозникновения',
				},
				{
					text:'Результат',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:608px;height:24px;',
			items:
			[
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:96px;top:83px;width:220px;height:19px;',
		},
	]
});