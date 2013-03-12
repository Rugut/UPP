Ext.define('Документы.ВводНачальныхОстатковМатериаловВЭксплуатации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:384px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков материалов в эксплуатации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:332px;width:88px;height:19px;',
		},
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
			style: 'position:absolute;left:96px;top:332px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Показать/скрыть счета учета',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:150px;width:636px;height:152px;',
			height: 152,width: 636,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Материал',
					width:'200',
				},
				{
					text:'Характеристика материала',
					width:'200',
				},
				{
					text:'Серия материала',
					width:'200',
				},
				{
					text:'Работник',
					width:'141',
				},
				{
					text:'Назначение использования',
					width:'146',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К.мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'67',
				},
				{
					text:'Дата передачи в эксплуатацию',
					width:'100',
				},
				{
					text:'Документ партии',
					width:'100',
				},
				{
					text:'Количество',
					width:'67',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Стоимость',
					width:'76',
				},
				{
					text:'Погашенная стоимость',
					width:'100',
				},
				{
					text:'Стоимость (регл.)',
					width:'78',
				},
				{
					text:'Погашенная стоимость (регл.)',
					width:'100',
				},
				{
					text:'Временная разница (НУ)',
					width:'100',
				},
				{
					text:'Погашенная временная разница (НУ)',
					width:'100',
				},
				{
					text:'Постоянная разница (НУ)',
					width:'100',
				},
				{
					text:'Погашенная постоянная разница (НУ)',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'75',
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:126px;width:636px;height:24px;',
			items:
			[
				'-',
				{
					text:'Изменить',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Создать документы партий',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:82px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:307px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:307px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:359px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:80px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:571px;top:33px;width:71px;height:19px;',
		},
	]
});