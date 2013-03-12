Ext.define('Документы.ВводСведенийОПлановыхУдержанияхРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:477px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод сведений о плановых удержаниях сотрудников организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:132px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:306px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:392px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:425px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:425px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:240px;width:604px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие13',
				},
				{
					text:'По сотруднику',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:264px;width:604px;height:154px;',
			height: 154,width: 604,
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
					text:'Удержание',
					width:'120',
				},
				{
					text:'Действие',
					width:'64',
				},
				{
					text:'Период с',
					width:'66',
				},
				{
					text:'...по',
					width:'66',
				},
				{
					text:'Показатели для расчета удержаний',
					width:'250',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'',
					width:'80',
				},
				{
					text:'',
					width:'45',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Показатель 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'45',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Показатель 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'45',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Показатель 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'45',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Показатель 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'45',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Показатель 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'45',
				},
				{
					text:'Основание',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие1',
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
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:620px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:306px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:392px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:604px;height:93px;',
			height: 93,width: 604,
			columns:
			[
				{
					text:'Сотрудник',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:604px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Списком сотрудников',
				},
				{
					text:'Действие',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});