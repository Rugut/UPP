Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗапросНаИнформационноеОбслуживаниеНалогоплательщика_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы Запрос на информационное обслуживание налогоплательщика',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:375px;',
			height: 375,width: 784,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Номер',
					width:'90',
				},
				{
					text:'Дата',
					width:'124',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Начало периода',
					width:'96',
				},
				{
					text:'Конец периода',
					width:'96',
				},
				{
					text:'Вид услуги',
					width:'104',
				},
				{
					text:'Формат ответа',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие3',
				},
			]
		},
	]
});