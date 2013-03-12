Ext.define('Документы.УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учет основного заработка сотрудников организации в регламентированном учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:179px;top:33px;width:16px;height:19px;',
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
			style: 'position:absolute;left:197px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Списком сотрудников',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:539px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:643px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:627px;height:220px;',
			height: 220,width: 627,
			columns:
			[
				{
					text:'№',
					width:'31',
				},
				{
					text:'Таб. №',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'150',
				},
				{
					text:'Дата изменения',
					width:'73',
				},
				{
					text:'Бух. учет',
					width:'139',
				},
				{
					text:'ЕНВД',
					width:'42',
				},
				{
					text:'До 2011 года. Отражение б/л за счет работодателя',
					width:'102',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:627px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:327px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтражаемыйДокумент',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:327px;top:33px;width:86px;height:19px;',
		},
	]
});