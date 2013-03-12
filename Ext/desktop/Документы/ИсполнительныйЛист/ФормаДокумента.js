Ext.define('Документы.ИсполнительныйЛист.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:498px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Исполнительный лист',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:370px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:580px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:100px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:33px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьС_Основание',
			text: 'Период с:',
			style: 'position:absolute;left:370px;top:129px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:454px;top:129px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:535px;top:129px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:553px;top:129px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Размер удержания:',
			style: 'position:absolute;left:16px;top:294px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Размер',
			style: 'position:absolute;left:121px;top:294px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:446px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:446px;width:600px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:708px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:562px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Вид документа:',
			style: 'position:absolute;left:16px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Выдан:',
			style: 'position:absolute;left:370px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеквизитыИсполнительногоДокумента',
			style: 'position:absolute;left:454px;top:105px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Получатель:',
			style: 'position:absolute;left:16px;top:129px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Получатель',
			style: 'position:absolute;left:100px;top:129px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоВыплаты',
			text: 'До выплаты:',
			style: 'position:absolute;left:16px;top:317px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предел',
			style: 'position:absolute;left:121px;top:317px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Ответственный:',
			style: 'position:absolute;left:370px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода5',
			style: 'position:absolute;left:454px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Удерживать с:',
			style: 'position:absolute;left:16px;top:177px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:100px;top:177px;width:79px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:338px;top:368px;width:362px;height:65px;',
			height: 65,width: 362,
			items:
			[
				{
					title:'Банковский перевод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифБанкаНаДенежныеПереводы',
			style: 'position:absolute;left:180px;top:23px;width:182px;height:19px;',
		},
					]
				},
				{
					title:'Почтовый перевод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПочтовогоСбора',
			style: 'position:absolute;left:180px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Тариф',
			style: 'position:absolute;left:180px;top:23px;width:182px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскиеИздержки',
			text: 'Банковские издержки',
			style: 'position:absolute;left:0px;top:0px;width:123px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПочтовыйСбор',
			text: 'Почтовый сбор',
			style: 'position:absolute;left:0px;top:0px;width:135px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрожиточныйМинимум',
			style: 'position:absolute;left:265px;top:270px;width:232px;height:19px;',
		},
	]
});