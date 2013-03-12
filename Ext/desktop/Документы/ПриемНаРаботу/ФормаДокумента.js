Ext.define('Документы.ПриемНаРаботу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прием на работу',
	
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Прием на работу в организацию',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:326px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:326px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:624px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:33px;width:192px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:608px;height:259px;',
			height: 259,width: 608,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:594px;height:209px;',
			height: 209,width: 594,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'70',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Должность',
					width:'85',
				},
				{
					text:'Ставка',
					width:'35',
				},
				{
					text:'Дата приема',
					width:'80',
				},
				{
					text:'По',
					width:'55',
				},
				{
					text:'Регистрировать увольнение отдельным документом',
					width:'20',
				},
				{
					text:'Испытательный срок',
					width:'120',
				},
				{
					text:'График работы',
					width:'120',
				},
				{
					text:'Способ отражения в упр учете',
					width:'120',
				},
				{
					text:'Учитывать начисления по организации',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:594px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Кандидатами',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подбор',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Сотрудниками, принятыми в организацию',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
			]
		},
					]
				},
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:594px;height:209px;',
			height: 209,width: 594,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'70',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Вид расчета',
					width:'120',
				},
				{
					text:'Показатели для расчета начисления',
					width:'245',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта 1',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 1',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд5',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд6',
					width:'125',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:594px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие11',
				},
				{
					text:'Заполнить по схемам мотивации',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
			]
		},
					]
				},
				{
					title:'Взыскания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:594px;height:209px;',
			height: 209,width: 594,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Вид расчета',
					width:'120',
				},
				{
					text:'Показатели для расчета взыскания',
					width:'245',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта 1',
					width:'45',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'45',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'45',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'45',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'45',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'45',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:594px;height:24px;',
			items:
			[
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Заполнить по схемам мотивации',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие11',
				},
			]
		},
					]
				},
			]
		},
	]
});