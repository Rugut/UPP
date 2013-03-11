Ext.define('Документы.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 529,width: 664,
	iconCls: 'bogus',
	title: 'Изменение условий оплаты отпуска по уходу за ребенком',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:477px;width:560px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:436px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПлановые',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:504px;width:413px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:648px;height:257px;',
			height: 257,width: 648,
			items:
			[
				{
					title:'Пособия',
				},
				{
					title:'ПлановыеНачисления',
				},
				{
					title:'ПлановыеУдержания',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:152px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:118px;top:101px;width:538px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:436px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:536px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения1',
			style: 'position:absolute;left:152px;top:125px;width:90px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:444px;top:438px;width:83px;height:33px;',
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
			style: 'position:absolute;left:527px;top:438px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:504px;width:251px;height:25px;',
			items:
			[
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Исправить',
				},
			]
		},
	]
});