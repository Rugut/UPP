Ext.define('Документы.ПодготовкаКПередачеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:723px;height:423px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка к передаче ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:200px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:346px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:371px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:371px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:80px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:96px;top:80px;width:225px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:432px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:506px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:707px;height:24px;',
			items:
			[
				'-',
				{
					text:'Для списка ОС',
				},
				'-',
				{
					text:'По наименованию',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:707px;height:194px;',
			height: 194,width: 707,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'216',
				},
				{
					text:'Инв. №',
					width:'63',
				},
				{
					text:'Стоимость',
					width:'102',
				},
				{
					text:'Ост. стоимость',
					width:'102',
				},
				{
					text:'Амортизация',
					width:'91',
				},
				{
					text:'Аморт. за месяц',
					width:'100',
				},
				{
					text:'Стоимость (БУ)',
					width:'110',
				},
				{
					text:'Ост. стоимость (БУ)',
					width:'116',
				},
				{
					text:'Амортизация (БУ)',
					width:'119',
				},
				{
					text:'Аморт. за месяц (БУ)',
					width:'122',
				},
				{
					text:'Стоимость (НУ)',
					width:'112',
				},
				{
					text:'Ост. стоимость (НУ)',
					width:'102',
				},
				{
					text:'Амортизация (НУ)',
					width:'119',
				},
				{
					text:'Аморт. за месяц (НУ)',
					width:'103',
				},
				{
					text:'Сумма аморт. премии, вкл. в расходы (НУ)',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:723px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Печать',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:346px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:580px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:344px;top:80px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:432px;top:80px;width:283px;height:19px;',
		},
	]
});