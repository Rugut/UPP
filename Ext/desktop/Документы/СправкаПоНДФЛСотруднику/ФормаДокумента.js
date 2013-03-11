Ext.define('Документы.СправкаПоНДФЛСотруднику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 600,width: 742,
	iconCls: 'bogus',
	title: 'Справка о доходах (2-НДФЛ) для сотрудника',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:450px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:550px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:575px;width:742px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:450px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:114px;top:550px;width:620px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:114px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:574px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:352px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеОткрытьСвойства1',
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
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:599px;top:147px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:114px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:726px;height:318px;',
			height: 318,width: 726,
			items:
			[
				{
					title:'Разделы3_5',
				},
				{
					title:'Раздел2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:114px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:383px;top:136px;width:141px;height:30px;',
			height: 30,width: 141,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:274px;top:58px;width:60px;height:19px;',
		},
	]
});