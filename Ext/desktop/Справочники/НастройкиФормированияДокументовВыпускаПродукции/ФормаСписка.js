Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:754px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:33px;width:488px;height:344px;',
			height: 344,width: 488,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Выполнено по',
					width:'88',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Вид документов',
					width:'160',
				},
				{
					text:'Детализация',
					width:'120',
				},
				{
					text:'УУ',
					width:'21',
				},
				{
					text:'БУ',
					width:'21',
				},
				{
					text:'НУ',
					width:'21',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'160',
				},
				{
					text:'Склад',
					width:'120',
				},
				{
					text:'Выпуск',
					width:'60',
				},
				{
					text:'Материалы',
					width:'60',
				},
				{
					text:'Автоматич.',
					width:'60',
				},
				{
					text:'Регламентное задание',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:754px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:244px;height:344px;',
			height: 344,width: 244,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
	]
});