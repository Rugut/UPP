Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 945,
	iconCls: 'bogus',
	title: 'Начисление по больничному листу',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:743px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:851px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:56px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:743px;top:56px;width:196px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:945px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю2',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:945px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:442px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:139px;top:79px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервичныйБольничныйЛист',
			style: 'position:absolute;left:139px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:237px;top:56px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияВходящего',
			style: 'position:absolute;left:139px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:98px;width:931px;height:373px;',
			height: 373,width: 931,
			items:
			[
				{
					title:'Условия',
				},
				{
					title:'ОборотБольничного',
				},
				{
					title:'ЗаявлениеВФСС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:511px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:726px;top:515px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:810px;top:515px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});